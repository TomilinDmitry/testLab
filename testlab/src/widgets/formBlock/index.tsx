import React, { useState } from "react";

import style from "./index.module.scss";
import { useForm } from "react-hook-form";
import errorIcon from "../../app/assets/icons/errorIcon.svg";
import successIcon from "../../app/assets/icons/successIcon.svg";
import { Notification } from "../../shared/notification";
type FormData = {
  name: string;
  phone: string;
  agreeToTerms: boolean;
};

export const FormBlock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    mode: "onChange",
  });
  let nameValue = watch("name", "");
  let phoneValue = watch("phone", "");

  const [showNotification, setShowNotification] = useState(false);
  const onSubmit = (data: FormData) => {
    submitForm(data);
  };
  const submitForm = (data: FormData) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 3000);
          reset();
        } else {
          console.error(
            "Ошибка при отправке формы:",
            response.statusText,
          );
        }
      })
      .catch((error) => {
        console.error("Ошибка при отправке формы:", error.message);
      });
  };

  return (
    <div>
      <h1>Отправь форму</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.container}>
          <div className={style.formGroup}>
            {(nameValue || errors.name) && (
              <label htmlFor='name' className={style.label}>
                Имя
              </label>
            )}
            <input
              className={`${
                errors.name
                  ? style.errorInput
                  : nameValue
                  ? style.value
                  : style.default
              } `}
              placeholder='Имя'
              id='name'
              {...register("name", {
                required: "Это поле обязательно",
              })}
            />
            {errors.name ? (
              <div className={style.errorBlock}>
                <span className={style.error}>
                  {errors.name.message}
                </span>
                <img
                  src={errorIcon}
                  alt='errorIcon'
                  className={style.errorIcon}
                />
              </div>
            ) : nameValue ? (
              <div className={style.successBlock}>
                <img
                  src={successIcon}
                  alt='successIcon'
                  className={style.successIcon}
                />
              </div>
            ) : null}
          </div>

          <div className={style.formGroup}>
            {(phoneValue || errors.phone) && (
              <label htmlFor='phone' className={style.label}>
                Телефон
              </label>
            )}
            <input
              placeholder='Телефон'
              id='phone'
              {...register("phone", {
                required: "Это поле обязательно",
                pattern: {
                  value: /^[0-9]+$/,
                  message:
                    "Номер телефона должен содержать только цифры",
                },
              })}
              className={`${
                errors.phone
                  ? style.errorInput
                  : phoneValue
                  ? style.value
                  : style.default
              } `}
            />
            {errors.phone ? (
              <div className={style.errorBlock}>
                <span className={style.error}>
                  {errors.phone.message}
                </span>
                <img
                  src={errorIcon}
                  alt='errorIcon'
                  className={style.errorIcon}
                />
              </div>
            ) : phoneValue ? (
              <div className={style.successBlock}>
                <img
                  src={successIcon}
                  alt='successIcon'
                  className={style.successIcon}
                />
              </div>
            ) : null}
          </div>
        </div>
        <div className={style.buttonBlock}>
          <div className={style.checkbox}>
            <label htmlFor='agreeToTerms'>
              <input
                type='checkbox'
                id='agreeToTerms'
                {...register("agreeToTerms", {
                  required: "Вы должны согласиться с условиями",
                })}
              />
              Я согласен с условиями
            </label>
            {errors.agreeToTerms && (
              <span className={style.error}>
                {errors.agreeToTerms.message}
              </span>
            )}
          </div>

          <button type='submit' className={style.submitButton}>
            Отправить
          </button>
        </div>
        {showNotification && (
          <Notification text='Ваша форма отправлена!' />
        )}
      </form>
    </div>
  );
};
