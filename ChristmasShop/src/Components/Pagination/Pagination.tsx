import { PaginationType } from "../../Models/PaginationType";


type PaginationProps = {
    gotoPage: (pageNo:number) => void;
    pagination: PaginationType;
}
const Pagination = ({gotoPage, pagination}: PaginationProps) => {

    const handleFirstPage = () => gotoPage(1);
    const handlePrevPage = () => {
        if(pagination.page > 0) gotoPage(pagination.page -1);
    }
    const handleNextPage = () => {
        if(pagination.page < 500) gotoPage(pagination.page +1);
    }
    const handleLastPage = () => gotoPage(500);
   



    return (
    <div className="pagination">
        <button onClick={handleFirstPage}>Big back</button>
        <button onClick={handlePrevPage}>back</button>
        <span>Page 1</span>
        <span>Of X Pages</span>
        <button onClick={handleNextPage}>forward</button>
        <button onClick={handleLastPage}>Big forward</button>
    </div>
    )
}

export default Pagination