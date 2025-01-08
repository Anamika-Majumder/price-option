import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li   className="mr-40" ><a href={`route.path`}>{route.name}</a></li>
    );
};
Link.proptoTypes = {
    route: PropTypes.object
}
export default Link;