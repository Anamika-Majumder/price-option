import PropTypes from 'prop-types';

const Features = (features) => {
    return (
        <div>
            <p>
            {features}
            </p>
        </div>
    );
};
Features.propTypes ={
    features:PropTypes.string
}

export default Features;