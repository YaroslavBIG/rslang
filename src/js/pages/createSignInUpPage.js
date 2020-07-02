export const createSignInUpPage = () => `<section class="inner-section__start">
    <a href="#/main" class="click-enter"></a>
      <div class="start-enter">
      <div class="inner">
        <div class="start-enter__inner">
          <nav class="start-enter__nav">
            <ul class="start-enter__nav-links">
              <li class="sign sign__in animation active"><a class="control control-in">Вход</a></li>
              <li class="sign sign__up animation inactive"><a class="control control-up">Регистрация</a></li>
            </ul>
          </nav>
          <div>
            <form class="form form__sign-in" action="" method="post" name="form" data-in>
  <input required autocomplete="disabled" class="form__styling sign-in__login" type="e-mail" name="login" placeholder="логин"/>
<input required autocomplete="disabled" class="form__styling sign-in__pass" type="password" name="password-in" placeholder="пароль"/>
              <div class="error-block"></div>
              <button class="button button_sign-in">Войти</button>
            </form>
            <form class="form form__sign-up" action="" method="post" name="form" data-up>
<input required autocomplete="disabled" class="form__styling" type="text" name="name" placeholder="Ваше имя"/>
<input required autocomplete="disabled" class="form__styling sign-up__login" type="e-mail" name="email" placeholder="e-mail"/>
<input required autocomplete="disabled" class="form__styling sign-up__pass" type="text" name="password-up" placeholder="пароль"/>
              <div class="error-block-up"></div>
              <div class="rules">
              <p> пароль должен содержать минимум: </p>
              <p>- 8 символов; </p>
              <p>- одну заглавную букву;</p>
              <p>- одну строчную букву;</p>
              <p>- одну цифру;</p>
              <p>- один специальный символ <strong>( +-_@$!%*?&#.,;:[]{} )</strong>;</p>
              </div>
              <p class="title-block">Выбери свою иконку!</p>
              <div class="icons">
                <div><img class="icons__item" src="assets/img/1.svg" alt="1"></div>
                <div><img class="icons__item" src="assets/img/2.svg" alt="2"></div>
                <div><img class="icons__item" src="assets/img/3.svg" alt="3"></div>
                <div><img class="icons__item" src="assets/img/4.svg" alt="4"></div>
                <div><img class="icons__item" src="assets/img/5.svg" alt="5"></div>
                <div><img class="icons__item" src="assets/img/6.svg" alt="6"></div>
              </div>
              <button class="button button_sign-up">Регистрация</button>
            </form>
          </div>
        </div>
        <div class="start-enter__text">
          <p> Изучай английский вместе с нами! </p>
        </div>
        </div>
      </div>
    </section>`;
