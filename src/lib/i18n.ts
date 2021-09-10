import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'Start': 'Start',
          'Roulette': 'Roulette',
          'Sign In': 'Sign In',
          'You are guest': 'You are guest',
          'Dice': 'Dice',
          '© Bitcoin Roulette': '© Bitcoin Roulette',
          'License agreement': 'License agreement',
          'License agreements': 'License agreements',
          'Payment proof': 'Payment proof',
          'Sign Up': 'Sign Up',
          'Log In': 'Log In',
          'Password': 'Password',
          'Confirm Password': 'Confirm Password',
          'Forgot your password?': 'Forgot your password?',
          'I confirm that I agree to the': 'I confirm that I agree to the',
          'Email': 'Email',
          'Email of Phone': 'Email or Phone',
          'Log Out': 'Log Out',
          'Close': 'Close',
          '+ Add': '+ Add',
          'Go back': 'Go back',
          'Apply': 'Apply',
          'Your own BTC wallet': 'Your own BTC wallet',
          'Top up your wallet and funds will be credited to your account': 'Top up your wallet and funds will be credited to your account',
          'Amount': 'Amount',
          'Wallet': 'Wallet',
          'Wallets': 'Wallets',
          'Withdraw Funds': 'Withdraw Funds',
          'Select wallet': 'Select wallet',
          'BTC Wallets': 'BTC Wallets',
          'Cabinet': 'Cabinet',
          'This page stands in development': 'This page stands in development',
          'Top Jackpot': 'Top Jackpot',

          //TODO - English
          'Games Today': 'Games Today',
          'Games Total': 'Games Total',
          'Paid total': 'Paid total',
          'Won total': 'Won total',
          'Top Lack': 'Top lack',
          'Max Bet': 'Max Bet',
          'Minute':'Minute',
          'Day': 'Day',
          'Week': 'Week',
          'Max 10 Bets':'Max 10 Bets',
          'Max 20 tickets': 'Max 20 tickets',
          'Fair Game': 'Fair Game',

          //dice page
          'Game': 'Game',
          'Fair Game': 'Fair Game',
          'Possible win': 'Possible win',
          'Probability of Winning': 'Probability of Winning',
          'Make a Bet': 'Make a Bet',
          'Roll under': 'Roll under',
          'Games History': 'Games History',
          'Deposit': 'Deposit',
          'Withdraw': 'Withdraw',
          'Chance': 'Chance',
          'Bet > 52': 'Bet > 52',
          'Bet < 48': 'Bet < 48',
          'HiLo': 'HiLo',
          'Use promo code to refill your balance': 'Use promo code to refill your balance',
          'Use one of payment option to refill your balance': 'Use one of payment option to refill your balance'
        }
      },
      ru: {
        translation: {
          'Start': 'Старт',
          'Roulette': 'Рулетка',
          'Sign In': 'Войти',
          'You are guest': 'Вы гость',
          'Dice': 'Кости',
          '© Bitcoin Roulette': '© Биткоин Рулетка',
          'License agreement': 'Лицензионное соглашение',
          'License agreements': 'Лицензионным соглашением',
          'Payment proof': 'Оплата',
          'Sign Up': 'Регистрация',
          'Log In': 'Авторизоваться',
          'Password': 'Пароль',
          'Confirm Password': 'Подтверждение пароля',
          'Forgot your password?': 'Забили пароль?',
          'I confirm that I agree to the': 'Я подтверждаю, что согласен с',
          'Email or Phone': 'Email или Телефон',
          'Log Out': 'Выйти',
          'Close': 'Закрыть',
          '+ Add': '+ Добавить',
          'Go back': 'Назад',
          'Apply': 'Применить',
          'Your own BTC wallet': 'Ваш личный BTC кошелек',
          'Top up your wallet and funds will be credited to your account': 'Пополните ваш баланс и средства будут зачислены на ваш аккаунт',
          'Amount': 'Сумма',
          'Wallet': 'Кошелек',
          'Wallets': 'Кошельки',
          'Withdraw Funds': 'Вывести средства',
          'Select wallet': 'Выбрать кошелек',
          'BTC Wallets': 'BTC Кошельки',
          'Cabinet': 'Кабинет',
          'This page stands in development': 'Эта страница находится в разработке',
          'Top Jackpot': 'Топ Джекпот',

          //TODO - Russian
          'Games Today': 'Игры сегодня',
          'Games Total': 'Всего Игр',
          'Paid total': 'Всего выплат',
          'Won total': 'Всего выигрышей',
          'Top Lack': 'Максимальная удача',
          'Max Bet': 'Максимальная ставка',
          'Minute': 'Минуты',
          'Day': 'День',
          'Week': 'Неделя',
          'Max 10 Bets': 'Максимально 10 ставок',
          'Max 20 tickets': 'Максимально 20 билетов',

          //dice page
          'Game': 'Игра',
          'Fair Game': 'Честная Игра',
          'Possible win': 'Возможный выигрыш',
          'Probability of Winning': 'Вероятность выигрыша',
          'Make a Bet': 'Сделать ставку',
          'Roll under': 'Крутить до',
          'Games History': 'История игр',
          'Deposit': 'Пополнение',
          'Withdraw': 'Вывод',
          'Chance': 'Шанс',
          'Bet > 52': 'Ставка > 52',
          'Bet < 48': 'Ставка < 48',
          'HiLo': 'Больше Меньше',
          'Use promo code to refill your balance': 'Используйте промокод для пополнения своего баланса',
          'Use one of payment option to refill your balance': 'Используйте одну из опций для пополнения вашего баланса'
        }
      },
    },
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
    },
    interpolation: {
      escapeValue: false
    },
  });

export const t = (text: string) => {

  return text
}

export const $t = (text: any) => {

  // const {t} = useTranslation();
  //
  // const data: string = t(`${text}`)

  return text
}