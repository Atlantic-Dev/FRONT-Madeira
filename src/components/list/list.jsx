import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCustomers } from "../../redux/actions"
import avatar1 from '../../images/avatar1.png'
import './list.css'

const List = () => {    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCustomers())
    },[])
    
    //Lista completa de users
    const allCustomers = useSelector((state) => state.customers.data)
    const completeList = allCustomers?.Ruby.concat(allCustomers?.Diamond.concat(allCustomers?.Platinum.concat(allCustomers?.Gold.concat(allCustomers?.Silver.concat(allCustomers?.Bronze.concat(allCustomers?.Copper.concat()))))))

    //Paginado
    const customersPerPage = 100
    const [currentPage, setCurrentPage] = useState(1)

    //Valores del Slice
    const indexOfLast = currentPage * customersPerPage
    const indexOfFirst = indexOfLast - customersPerPage 

    //Cantidad de paginas
    let pageLimit = Math.ceil(completeList?.length  / customersPerPage)
    let pageNumbers = []
    if (currentPage < 5) {
        pageNumbers = [1, 2, 3, 4, 5, 6, 7]
    } else if (currentPage > (pageLimit - 4)){
        pageNumbers = [pageLimit-6, pageLimit-5, pageLimit-4, pageLimit-3, pageLimit-2, pageLimit-1, pageLimit]
    } else {
    for (let i = currentPage-3; i <= currentPage+3; i++) {
        pageNumbers.push(i)
    }}

    //Pagina mostrada
    const slicedList = completeList?.slice(indexOfFirst, indexOfLast)

    //Cambio de pagina
    const handlePage = (e) =>{
        e.preventDefault()
        setCurrentPage(parseInt(e.target.id));
    }
    
    const setPageStart = (e) => {
        e.preventDefault()
        if(currentPage > 4)setCurrentPage(1)
    }

    const setPageEnd = (e) => {
        e.preventDefault()
        if(currentPage < pageLimit -3)setCurrentPage(pageLimit)
    }

    const setPagePrevFive = (e) => {
        e.preventDefault()
        if(currentPage-5 > 0)setCurrentPage(currentPage-5)
    }
    const setPageNextFive = (e) => {
        e.preventDefault()
        if(currentPage+5 < pageLimit+1)setCurrentPage(currentPage+5)
    }
    

    //Renderizado de botones
    const pagination =  pageNumbers.map((p) => {
        return (             
            <button className={currentPage === p ? "ListPageButtonActive" : "ListPageButton"} key={p} id={p} onClick={handlePage}> {p} </button>             
        )}
    )

    //Par o impar para definir className del div (diferentes BG-color)
    function isEven(n) {
        return n % 2
    }

    return(
        <div className="ListContainer">
            <div className="List">
                <div className="ListPageButtons">
                    <button className={currentPage > 4 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPageStart}>1</button>
                    <button className={currentPage > 5 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPagePrevFive}>{currentPage-5 < 1 ? 1 : currentPage-5}</button>
                    <div className="ListPageButtonsNumbers">
                    {pagination}
                    </div>
                    <button className={currentPage < pageLimit-4 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPageNextFive}>{currentPage > pageLimit-5 ? pageLimit : currentPage+5}</button>
                    <button className={currentPage < pageLimit-3 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPageEnd}>{pageLimit}</button>
                </div>
                <div className="ListRanking">
                    <div className='ListRankingTitle'>
                        <div className='ListRankingTitleFirst'>
                            <span className="ListRankingTitleText">
                                Rank
                            </span>
                            <span className="ListRankingTitleText">
                                Avatar
                            </span>
                        </div>
                        <div className="ListRankingTitleSecond">
                            <span className="ListRankingTitleText">
                                User
                            </span>
                            <div className="ListRankingTitleSecondSub">
                                <span className="ListRankingTitleText">
                                    Status
                                </span>
                                <span className="ListRankingTitleText">
                                    Points
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="ListRankingCustomers">
                    {slicedList?.map((player, index) => {
                        return(
                            isEven(index) === 0 ?
                            <div className='ListCustomerEven'>
                                <div className='ListCustomerFirst'>
                                    <div className='ListCustomerRank'>
                                        <span>{index+1+((currentPage-1)*100)}</span>
                                    </div>
                                    <div className='ListCustomerAvatar'>
                                        <img className='ListCustomerAvatar' src={avatar1}/>
                                    </div>
                                </div>
                                <div className='ListCustomerSecond'>
                                    <div className='ListCustomerNameDiv'>
                                        <span className='ListCustomerNickname'>
                                            {player.nickname}
                                        </span>
                                    </div>
                                    <div className='ListCustomerData'>
                                        <div className='ListCustomerStatusDiv'>
                                            <span className='ListCustomerStatus'>
                                                {player.status}
                                            </span>
                                        </div>
                                        <div className='ListCustomerPointsDiv'>
                                            <span className='ListCustomerPoints'>
                                                {player.totalPoints}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='ListCustomerOdd'>
                                <div className='ListCustomerFirst'>
                                    <div className='ListCustomerRank'>
                                        <span>{index+1+((currentPage-1)*100)}</span>
                                    </div>
                                    <div className='ListCustomerAvatar'>
                                        <img className='ListCustomerAvatar' src={avatar1}/>
                                    </div>
                                </div>
                                <div className='ListCustomerSecond'>
                                    <div className='ListCustomerNameDiv'>
                                        <span className='ListCustomerNickname'>
                                            {player.nickname}
                                        </span>
                                    </div>
                                    <div className='ListCustomerData'>
                                        <div className='ListCustomerStatusDiv'>
                                            <span className='ListCustomerStatus'>
                                                {player.status}
                                            </span>
                                        </div>
                                        <div className='ListCustomerPointsDiv'>
                                            <span className='ListCustomerPoints'>
                                                {player.totalPoints}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List