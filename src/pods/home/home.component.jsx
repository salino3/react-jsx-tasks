import { FormNewProduct } from './components';
import './home.styles.css';

export const Home = () => {

    return (
        <div className="rootHome">
            <h1 className='titleHome'>
                Home Page
            </h1>
            <FormNewProduct />
        </div>
    )
}