const createSignInUpPage = () => {
  return `<section class="inner-section__start">
    <a href="#/auth" class="click-reload"></a>
    <a href="#/main" class="click-enter"></a>
      <div class="start-enter">
        <div class="start-enter__inner">
          <nav class="start-enter__nav">
            <ul class="start-enter__nav-links">
              <li class="sign sign__in animation active"><a class="control control-in">Sign in</a></li>
              <li class="sign sign__up animation inactive"><a class="control control-up">Sign up</a></li>
            </ul>
          </nav>
          <div>
            <form class="form form__sign-in" action="" method="post" name="form" data-in>
              <label for="login">Login</label>
  <input required autocomplete="disabled" class="form__styling sign-in__login" type="e-mail" name="login" placeholder=""/>
              <label for="password">Password</label>
<input required autocomplete="disabled" class="form__styling sign-in__pass" type="password" name="password-in" placeholder=""/>
              <div class="error-block"></div>
              <button class="button">Sign in</button>
            </form>
            <form class="form form__sign-up" action="" method="post" name="form" data-up>
              <label for="email">Email</label>
   <input required autocomplete="disabled" class="form__styling sign-up__login" type="e-mail" name="email" placeholder=""/>
              <label for="password">Password</label>
<input required autocomplete="disabled" class="form__styling sign-up__pass" type="text" name="password-up" placeholder=""/>
              <div class="error-block"></div>
              <button class="button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </section>`;
};

export default createSignInUpPage;
