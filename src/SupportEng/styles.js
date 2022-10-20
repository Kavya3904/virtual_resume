import image from "../image/profile.jpg"
export const styles = {
    chatWithMeButton: {

        cursor: 'pointer',
        boxShadow: '0px 0px 16px 6px ',
        // Border
        borderRadius: '50%',
        // Background 
        backgroundImage: `url(${image})`, 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundSize: '85px',
        // Size
        width: '84px',
        height: '84px',

      
    },
    avatarHello: { 
        // Position
        position: 'fixed', 
        bottom:'40px',
        right:'100px',
        // Layering
        zIndex: '10000',
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
        // Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px', 
        // Color
        backgroundColor: '#f9f0ff',
        color: 'black',
    },
    supportWindow: {
        // Position
        position: 'fixed',
        bottom: '126px',
        right: '24px',
        // Size
        width: '420px',
        height: '600px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        // Border
        borderRadius: '12px',
        border: `2px solid goldenrod`,
        overflow: 'hidden',
        // Shadow
        boxShadow: '0px 0px 16px 6px rgba(0, 0, 0, 0.33)',
    },
    emailFormWindow: { 
        width: '100%',  
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-55px',
        width: '100%',
        height: '360px',
        backgroundColor: 'black',
        transform: 'skewY(-11deg)',
    },
    topText: { 
        position: 'relative',
        width: '100%', 
        top: '15%', 
        color: 'white', 
        fontSize: '27px', 
        fontWeight: '600',
    },
    emailInput: { 
        width: '66%',
        textAlign: 'center',
        outline: 'none',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid goldenrod',
    },
    bottomText: { 
        position: 'absolute', 
        width: '100%', 
        top: '60%', 
        color: 'black', 
        fontSize: '27px', 
        fontWeight: '600' 
    },
    loadingDiv: { 
        position: 'absolute', 
        height: '100%', 
        width: '100%', 
        textAlign: 'center', 
        backgroundColor: 'white',
    },
    loadingIcon: { 
        color: 'goldenrod', 
        position: 'absolute', 
        top: 'calc(50% - 51px)', 
        left: 'calc(50% - 51px)',  
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',  
        backgroundColor: '#fff',
    }
}