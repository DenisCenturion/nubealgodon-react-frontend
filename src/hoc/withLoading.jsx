import  PacmanLoader from "react-spinners/PacmanLoader";

export const withLoading = (Component) => {
    function ComponentWithLoading(props){
        const { isLoading } = props;

        if(isLoading){
            return(
                <PacmanLoader color="#f329d8" />
            );
        }

        return(
            <Component {...props} />
        )
    }

    return ComponentWithLoading;
}