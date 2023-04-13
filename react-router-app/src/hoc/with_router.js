import { useNavigate } from "react-router-dom"
/* 封装高阶组件，使得类组件能够使用useNavigate */
function witheRouter(WrapperComponent) {
    return function (props) {
        const navigate = useNavigate()
        return <WrapperComponent {...props} router={{ navigate }} />
    }
}

export default witheRouter