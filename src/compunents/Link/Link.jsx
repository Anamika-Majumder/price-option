import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li   className="mr-44 px-6 hover:bg-slate-500"><a href={`route.path`}>{route.name}</a></li>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;