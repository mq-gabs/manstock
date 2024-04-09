import addChart from '../../assets/images/add-car.svg';
import addProduct from '../../assets/images/add-product.svg';
import barCode from '../../assets/images/bar-code.svg';
import registers from '../../assets/images/registers.svg';
import add from '../../assets/images/plus.svg';
import sub from '../../assets/images/minus.svg';
import trash from '../../assets/images/trash.svg';
import cancel from '../../assets/images/cancel.svg';
import checkCar from '../../assets/images/check-car.svg';
import warning from '../../assets/images/warning.svg';
import info from '../../assets/images/info.svg';
import success from '../../assets/images/success.svg';
import searchPrimary from '../../assets/images/search-primary.svg';
import barCodePrimary from '../../assets/images/bar-code-primary.svg';
import carGrey from '../../assets/images/car-grey.svg';
import loading from '../../assets/images/loading.svg';
import searchWhite from '../../assets/images/search-white.svg';
import name from '../../assets/images/name.svg';
import logo from '../../assets/images/logo.svg';
import password from '../../assets/images/password.svg';
import email from '../../assets/images/email.svg';
import out from '../../assets/images/out.svg';
import eye from '../../assets/images/eye.svg';
import slashEye from '../../assets/images/slash-eye.svg';
import ticket from '../../assets/images/ticket.svg';
import quest from '../../assets/images/quest.svg';
import pencil from '../../assets/images/pencil.svg';
import loadingWhite from '../../assets/images/loading-white.svg';
import back from '../../assets/images/back.svg';
import enter from '../../assets/images/enter.svg';
import date from '../../assets/images/date.svg';
import time from '../../assets/images/time.svg';
import list from '../../assets/images/list.svg';
import arrow from '../../assets/images/arrow.svg';
import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import user from '../../assets/images/user.svg';
import newUser from '../../assets/images/new-user.svg';
import pencilWhite from '../../assets/images/pencil-white.svg';

import light from '../../assets/themes/light';

const icons = {
  addChart,
  addProduct,
  barCode,
  registers,
  add,
  sub,
  trash,
  cancel,
  checkCar,
  warning,
  info,
  success,
  searchPrimary,
  barCodePrimary,
  carGrey,
  loading,
  searchWhite,
  name,
  logo,
  email,
  password,
  out,
  eye,
  slashEye,
  ticket,
  quest,
  pencil,
  loadingWhite,
  back,
  enter,
  date,
  time,
  list,
  arrow,
  arrowLeft,
  arrowRight,
  user,
  newUser,
  pencilWhite,
};

export interface IIcon {
  name: 'addChart' 
  | 'addProduct' 
  | 'barCode' 
  | 'registers' 
  | 'add' 
  | 'sub' 
  | 'trash' 
  | 'cancel' 
  | 'checkCar'
  | 'warning'
  | 'info'
  | 'success'
  | 'searchPrimary'
  | 'barCodePrimary'
  | 'carGrey'
  | 'loading'
  | 'searchWhite'
  | 'name'
  | 'logo'
  | 'email'
  | 'password'
  | 'out'
  | 'eye'
  | 'slashEye'
  | 'ticket'
  | 'quest'
  | 'pencil'
  | 'loadingWhite'
  | 'back'
  | 'enter'
  | 'date'
  | 'time'
  | 'list'
  | 'arrow'
  | 'arrowLeft'
  | 'arrowRight'
  | 'user'
  | 'newUser'
  | 'pencilWhite';
  onClick?: () =>  void;
  size?: number;
  background?: boolean;
}

const Icon = ({
  name,
  onClick,
  size = 1,
  background = false,
  ...rest
}: IIcon) => (
  <div style={{
    background: (onClick && background) ? light.colors.lightGrey : 'none',
    borderRadius: '5rem',
    padding: '.3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <img
      style={{ width: String(size + "rem"), height: String(size + "rem"), cursor: onClick && 'pointer' }}
      onClick={onClick}
      src={icons[name]}
      {...rest}
    />
  </div>
)

export default Icon;