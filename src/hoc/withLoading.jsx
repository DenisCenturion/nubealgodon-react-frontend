import ItemListSkeleton from "../components/ItemListSkeleton";

export const withLoading = (Component) => {
    function ComponentWithLoading(props){
        const { isLoading } = props;

        if(isLoading){
            return <ItemListSkeleton />
        }

        return(
            <Component {...props} />
        )
    };

    return ComponentWithLoading;
}