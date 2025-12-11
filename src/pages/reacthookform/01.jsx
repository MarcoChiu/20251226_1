
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

// Input 元件
const Input = ({ id, label, type = "text", placeholder, register, errors, validation }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                id={id}
                type={type}
                className={`form-control ${errors ? 'is-invalid' : ''}`}
                placeholder={placeholder}
                defaultValue=""
                {...register(id, validation)}
            />
            {errors && <div className="invalid-feedback">{errors.message}</div>}
        </div>
    );
};

// Checkbox 元件
const CheckboxGroup = ({ label, name, options, register, errors, validation }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <div className="form-check">
                {options.map((option, index) => (
                    <span key={option.value}>
                        <label htmlFor={`${name}${index + 1}`}>{option.label}</label>
                        <input
                            id={`${name}${index + 1}`}
                            type="checkbox"
                            {...register(name, validation)}
                            value={option.value}
                            className="form-check-input ms-1 me-3"
                        />
                    </span>
                ))}
            </div>
            {errors && <div className="text-danger small mt-1">{errors.message}</div>}
        </div>
    );
};

// Radio 元件
const RadioGroup = ({ label, name, options, register, errors, validation }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <div className="form-check">
                {options.map((option, index) => (
                    <div key={option.value} className="form-check form-check-inline">
                        <input
                            id={`${name}${index + 1}`}
                            type="radio"
                            className="form-check-input"
                            {...register(name, validation)}
                            value={option.value}
                        />
                        <label htmlFor={`${name}${index + 1}`} className="form-check-label">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            {errors && <div className="text-danger small mt-1">{errors.message}</div>}
        </div>
    );
};

// Select 元件
const Select = ({ id, label, options, register, errors, validation }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <select
                id={id}
                className={`form-select ${errors ? 'is-invalid' : ''}`}
                {...register(id, validation)}
            >
                <option value="">請選擇...</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && <div className="invalid-feedback">{errors.message}</div>}
        </div>
    );
};

export default function ReactHookFormAiPage() {

    // 城市與區域資料
    const cityDistrictData = {
        taipei: [
            { label: '中正區', value: 'zhongzheng' },
            { label: '大同區', value: 'datong' },
            { label: '中山區', value: 'zhongshan' },
            { label: '松山區', value: 'songshan' },
            { label: '大安區', value: 'daan' },
            { label: '萬華區', value: 'wanhua' },
            { label: '信義區', value: 'xinyi' },
            { label: '士林區', value: 'shilin' },
            { label: '北投區', value: 'beitou' },
            { label: '內湖區', value: 'neihu' },
            { label: '南港區', value: 'nangang' },
            { label: '文山區', value: 'wenshan' }
        ],
        'new-taipei': [
            { label: '板橋區', value: 'banqiao' },
            { label: '三重區', value: 'sanchong' },
            { label: '中和區', value: 'zhonghe' },
            { label: '永和區', value: 'yonghe' },
            { label: '新莊區', value: 'xinzhuang' },
            { label: '新店區', value: 'xindian' },
            { label: '樹林區', value: 'shulin' },
            { label: '鶯歌區', value: 'yingge' },
            { label: '三峽區', value: 'sanxia' },
            { label: '淡水區', value: 'tamsui' }
        ],
        taoyuan: [
            { label: '桃園區', value: 'taoyuan' },
            { label: '中壢區', value: 'zhongli' },
            { label: '平鎮區', value: 'pingzhen' },
            { label: '八德區', value: 'bade' },
            { label: '楊梅區', value: 'yangmei' },
            { label: '蘆竹區', value: 'luzhu' }
        ],
        taichung: [
            { label: '中區', value: 'central' },
            { label: '東區', value: 'east' },
            { label: '西區', value: 'west' },
            { label: '南區', value: 'south' },
            { label: '北區', value: 'north' },
            { label: '西屯區', value: 'xitun' },
            { label: '南屯區', value: 'nantun' },
            { label: '北屯區', value: 'beitun' }
        ],
        tainan: [
            { label: '中西區', value: 'west-central' },
            { label: '東區', value: 'east' },
            { label: '南區', value: 'south' },
            { label: '北區', value: 'north' },
            { label: '安平區', value: 'anping' },
            { label: '安南區', value: 'annan' }
        ],
        kaohsiung: [
            { label: '新興區', value: 'xinxing' },
            { label: '前金區', value: 'qianjin' },
            { label: '苓雅區', value: 'lingya' },
            { label: '鹽埕區', value: 'yancheng' },
            { label: '鼓山區', value: 'gushan' },
            { label: '旗津區', value: 'qijin' },
            { label: '前鎮區', value: 'qianzhen' },
            { label: '三民區', value: 'sanmin' },
            { label: '左營區', value: 'zuoying' }
        ]
    };

    const [districtOptions, setDistrictOptions] = useState([]);

    const {
        register,//資料綁定name抓出
        handleSubmit,//送出方法
        watch,//可將register值取出
        control,//了解當前運作哪一個register
        getValues,//取得所有表單值
        setValue,//設定表單值
        formState: { errors },//錯誤訊息
    } = useForm({
        // defaultValues: {
        //     username: '123',
        //     email: '456',
        //     interest: []
        // },
        mode: 'onTouched' // 當欄位失去焦點時觸發驗證
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data, null, 2));
        console.log(data);
    };

    //會一直監聽變動
    console.log('watch', watch());

    //https://www.webdong.dev/zh-tw/post/watch-vs-usewatch-in-react-hook-form/
    //useWatch 與 watch 差別僅在他們重新渲染的層級，如果程式本身沒有效能問題使用 watch 就足矣，但如果有效能問題，就可以使用 useWatch 來解決。
    const watchFrom = useWatch({
        control
    });

    //表單有變動時觸發，可以用此方法
    useEffect(() => {
        //console.log('getValues:', JSON.stringify(getValues()));
    }, [watchFrom]);

    // 監聽城市變化，更新區域選項
    const selectedCity = watch('city');
    useEffect(() => {
        if (selectedCity && cityDistrictData[selectedCity]) {
            setDistrictOptions(cityDistrictData[selectedCity]);
            setValue('district', ''); // 重置區域選擇
        } else {
            setDistrictOptions([]);
        }
    }, [selectedCity]);

    const resetForm = () => {
        setValue('username', '');
        setValue('email', '');
        setValue('phone', '');
        setValue('interest', []);
        setValue('agree', false);
        setValue('gender', '');
        setValue('city', '');
        setValue('district', '');
    };

    //console.log('errors', errors);

    return (
        <div className="container py-5">
            {/* 標題區塊 */}
            <div
                className="text-center mb-5 p-5 rounded-4 text-white position-relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)'
                }}
            >
                <div className="position-relative" style={{ zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3">
                        <i className="bi bi-ui-checks me-3"></i>
                        React Hook Form
                    </h1>
                    <p className="lead mb-0">高效能表單驗證函式庫 - 元件化實作</p>
                </div>
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        zIndex: 0
                    }}
                ></div>
            </div>

            {/* 功能說明 */}
            <div className="row mb-5">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="h4 mb-4">
                                <i className="bi bi-info-circle me-2 text-primary"></i>
                                功能說明
                            </h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-check2-circle text-primary fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">主要優勢</h5>
                                            <ul className="text-muted mb-0">
                                                <li>效能優異：最小化重新渲染次數</li>
                                                <li>易於整合：支援各種 UI 函式庫</li>
                                                <li>內建驗證：強大的驗證規則系統</li>
                                                <li>TypeScript 支援：完整的型別定義</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <div className="flex-shrink-0">
                                            <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                                <i className="bi bi-puzzle text-success fs-4"></i>
                                            </div>
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className="mb-2">元件化實作</h5>
                                            <ul className="text-muted mb-0">
                                                <li>自訂 Input、Select 元件</li>
                                                <li>CheckboxGroup、RadioGroup 元件</li>
                                                <li>統一的驗證錯誤處理</li>
                                                <li>可重複使用的表單元件</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 互動範例 */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">
                                <i className="bi bi-code-square me-2 text-primary"></i>
                                互動範例
                            </h3>
                            <form action='' onSubmit={handleSubmit(onSubmit)}>

                                <Input
                                    id="username"
                                    label="姓名"
                                    type="text"
                                    placeholder="請輸入文字"
                                    register={register}
                                    errors={errors.username}
                                    validation={{ required: "姓名為必填欄位" }}
                                />

                                <Input
                                    id="email"
                                    label="Email"
                                    type="email"
                                    placeholder="example@email.com"
                                    register={register}
                                    errors={errors.email}
                                    validation={{
                                        required: "Email 為必填欄位",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email 格式不正確"
                                        }
                                    }}
                                />

                                <Input
                                    id="phone"
                                    label="電話"
                                    type="tel"
                                    placeholder="0912345678"
                                    register={register}
                                    errors={errors.phone}
                                    validation={{
                                        required: "電話為必填欄位",
                                        pattern: {
                                            value: /^09\d{8}$/,
                                            message: "請輸入正確的手機號碼格式 (09XXXXXXXX)"
                                        }
                                    }}
                                />

                                <CheckboxGroup
                                    label="興趣"
                                    name="interest"
                                    options={[
                                        { label: '打球', value: '打球' },
                                        { label: '游泳', value: '游泳' },
                                        { label: '爬山', value: '爬山' }
                                    ]}
                                    register={register}
                                    errors={errors.interest}
                                    validation={{ required: "請至少選擇一個興趣" }}
                                />

                                {/* Checkbox 單選範例 */}
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input
                                            id="agree"
                                            type="checkbox"
                                            className="form-check-input"
                                            {...register("agree", { 
                                                required: "請同意服務條款" 
                                            })}
                                        />
                                        <label htmlFor="agree" className="form-check-label">
                                            我同意服務條款
                                        </label>
                                    </div>
                                    {errors.agree && (
                                        <div className="text-danger small mt-1">
                                            {errors.agree.message}
                                        </div>
                                    )}
                                </div>

                                <RadioGroup
                                    label="性別"
                                    name="gender"
                                    options={[
                                        { label: '男性', value: 'male' },
                                        { label: '女性', value: 'female' },
                                        { label: '其他', value: 'other' }
                                    ]}
                                    register={register}
                                    errors={errors.gender}
                                    validation={{ required: "請選擇性別" }}
                                />

                                <Select
                                    id="city"
                                    label="城市"
                                    options={[
                                        { label: '台北市', value: 'taipei' },
                                        { label: '新北市', value: 'new-taipei' },
                                        { label: '桃園市', value: 'taoyuan' },
                                        { label: '台中市', value: 'taichung' },
                                        { label: '台南市', value: 'tainan' },
                                        { label: '高雄市', value: 'kaohsiung' }
                                    ]}
                                    register={register}
                                    errors={errors.city}
                                    validation={{ required: "請選擇城市" }}
                                />

                                <Select
                                    id="district"
                                    label="區域"
                                    options={districtOptions}
                                    register={register}
                                    errors={errors.district}
                                    validation={{ required: "請選擇區域" }}
                                />

                                {/* button */}
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-lg">送出表單</button>
                                    <button type="button" className="btn btn-secondary btn-lg" onClick={resetForm}>重設表單</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* 程式碼範例 */}
            <div className="row">
                <div className="col-12">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-code-slash me-2 text-success"></i>
                                程式碼範例
                            </h3>
                            <pre className="bg-light p-4 rounded-3 overflow-auto">
                                <code>{`import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 基本輸入 */}
      <input
        {...register("username", { 
          required: "姓名為必填欄位" 
        })}
        placeholder="姓名"
      />
      {errors.username && <span>{errors.username.message}</span>}
      
      {/* Email 驗證 */}
      <input
        {...register("email", {
          required: "Email 為必填欄位",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
            message: "Email 格式不正確"
          }
        })}
        placeholder="Email"
      />
      
      <button type="submit">送出</button>
    </form>
  );
}`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* 最佳實踐 */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card border-0 shadow-sm bg-light">
                        <div className="card-body">
                            <h3 className="card-title mb-3">
                                <i className="bi bi-lightbulb me-2 text-warning"></i>
                                最佳實踐
                            </h3>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>元件化:</strong> 將表單欄位封裝成可重複使用的元件
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>驗證規則:</strong> 使用內建驗證規則簡化程式碼
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                                        <div>
                                            <strong>錯誤處理:</strong> 統一顯示驗證錯誤訊息
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-start">
                                        <i className="bi bi-x-circle-fill text-danger me-2 mt-1"></i>
                                        <div>
                                            <strong>避免:</strong> 過度使用 watch 導致效能問題
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
