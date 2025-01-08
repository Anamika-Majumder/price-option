import PropTypes from 'prop-types';
//  import Features from '../Features/Features';

const PriceOptions = ({option}) => {

    const {name, price, } = option;
    return (
        <div  className='bg-blue-500 rounded-md p-6 text-white'>
            <h1>{price}</h1>
            <h2>
              <span className='tex-3xl text-center py-8'> {name}

              </span>
            {
                    
            }
            
            </h2>
        </div>
    );
};

PriceOptions.propTypes ={
    option :PropTypes.object
}

export default PriceOptions;