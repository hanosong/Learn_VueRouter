import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
/* 封装高阶组件，使得类组件能够使用useNavigate */
function witheRouter(WrapperComponent) {
  return function (props) {
    // 导航
    const navigate = useNavigate();
    // 动态路由的参数 => /detail/:id
    const params = useParams();
    // 查询字符串的参数 => /user?name=aa&age=18
    const location = useLocation();
    // useSearchParams返回一个数组， 0 => 获取的值； 1 => 设置的值的函数
    const [searchParams, setSearchParams] = useSearchParams();
    // 将searchParams转成一个普通的对象，并传递下去
    // 使用for of 遍历对象，等同于遍历searchParams.entries
    // for (const item of searchParams){}
    const query = Object.fromEntries(searchParams.entries());
    return (
      <WrapperComponent {...props} router={{ navigate, params, location }} />
    );
  };
}

export default witheRouter;
