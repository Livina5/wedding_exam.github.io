import { useForm } from 'react-hook-form';
import './Form.css';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="wedding-form">
        <h2>Ваша присутність</h2>
        
        <div className="form-group">
          <label>Ім'я та Прізвище <span className="required">*</span></label>
          <input
            {...register('firstName', { required: "Це поле обов'язкове" })}
            placeholder="Введіть ваше ім'я та прізвище"
          />
          {errors.firstName && <span className="error">{errors.firstName.message}</span>}
        </div>

        <div className="form-group">
          <label>Email <span className="required">*</span></label>
          <input
            {...register('email', {
              required: "Email обов'язковий",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Невірний формат email"
              }
            })}
            placeholder="Введіть ваш email"
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="form-group radio-group">
          <label>Чи будете ви присутні на весіллі? <span className="required">*</span></label>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                value="yes"
                {...register('attendance', { 
                  required: "Будь ласка, оберіть один з варіантів відповіді" 
                })}
              />
              <span>Так, буду</span>
            </label>
            
            <label className="radio-label">
              <input
                type="radio"
                value="no"
                {...register('attendance', { 
                  required: "Будь ласка, оберіть один з варіантів відповіді" 
                })}
              />
              <span>На жаль, не зможу</span>
            </label>
            
            <label className="radio-label">
              <input
                type="radio"
                value="maybe"
                {...register('attendance', { 
                  required: "Будь ласка, оберіть один з варіантів відповіді" 
                })}
              />
              <span>Ще вагаюсь, відповідь надам пізніше</span>
            </label>
          </div>
          {errors.attendance && <span className="error">{errors.attendance.message}</span>}
        </div>

        <div className="form-group">
          <label>Кількість гостей</label>
          <input
            type="number"
            min="0"
            max="5"
            {...register('guests', {
              min: {
                value: 0,
                message: "Мінімальна кількість - 0"
              },
              max: {
                value: 5,
                message: "Максимальна кількість - 5"
              }
            })}
            placeholder="Вкажіть кількість додаткових гостей"
          />
          {errors.guests && <span className="error">{errors.guests.message}</span>}
        </div>

        <div className="form-group">
          <label>Повідомлення</label>
          <textarea
            {...register('message')}
            placeholder="Введіть ваше повідомлення"
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">
          Відправити
        </button>
      </form>
    </div>
  );
};

export default Form;
