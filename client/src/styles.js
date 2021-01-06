import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: '#00bfff',
        display: 'inline'
    },
    image: {
        marginLeft: '15px',
        display: 'inline'
    },
    [theme.breakpoints.down("sm")]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    }
}));