import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCustomers, searchCustomers } from "../../redux/actions"
import './list.css'
import {BsSearch} from 'react-icons/bs'

const List = () => {    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCustomers())
    },[])
    
    //Lista completa de users
    const allCustomers = useSelector((state) => state.customers)
    const backUpList = useSelector((state) => state.backup)
    /*const completeList = allCustomers?.Ruby?.concat(allCustomers?.Diamond.concat(allCustomers?.Platinum.concat(allCustomers?.Gold.concat(allCustomers?.Silver.concat(allCustomers?.Bronze.concat(allCustomers?.Copper.concat())))))) */

    //Paginado
    const customersPerPage = 100
    const [currentPage, setCurrentPage] = useState(1)

    //Valores del Slice
    const indexOfLast = currentPage * customersPerPage
    const indexOfFirst = indexOfLast - customersPerPage 

    //Filtro por status
    const [filter, setFilter] = useState('all')

    function handleSelect(e){
        setFilter(e.target.value)
        setCurrentPage(1)
    }

    //Cantidad de paginas
    let pageLimit = Math.ceil(allCustomers?.length  / customersPerPage)
    let pageNumbers = []
    if (currentPage < 5) {
        for (let i = 0; i < pageLimit && i < 7; i++){
        pageNumbers.push(i+1)
    }
    } else if (currentPage > (pageLimit - 4)){
        pageNumbers = [pageLimit-6, pageLimit-5, pageLimit-4, pageLimit-3, pageLimit-2, pageLimit-1, pageLimit]
    } else {
    for (let i = currentPage-3; i <= currentPage+3; i++) {
        pageNumbers.push(i)
    }}

    //Pagina mostrada

    let filtredList = allCustomers
    if (filter !== 'all') {
        filtredList = allCustomers.filter((p) => p.status === filter) 
    }

    const slicedList = filtredList?.slice(indexOfFirst, indexOfLast)

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
    const pagination = pageNumbers.map((p) => {
        return (             
            <button className={currentPage === p ? "ListPageButtonActive" : "ListPageButton"} key={p} id={p} onClick={handlePage}> {p} </button>             
        )}
    )

    //Numero de ranking
    function rankOf (customer) {
        return backUpList?.findIndex(cus => cus._id === customer._id)+1
    }

    //Par o impar para definir className del div (diferentes BG-color)
    function isEven(n) {
        return n % 2
    }

    //Conexión del search al reducer
    function handleSearch(e){
        e.preventDefault()
        let inputValue = document.getElementsByClassName("ListPageSearch")[0].value
        dispatch(searchCustomers(inputValue))
        setFilter("all")
        setCurrentPage(1)
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
                    <button className={currentPage < pageLimit-3 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPageEnd}>{isNaN(pageLimit) ? 10 : pageLimit}</button>
                </div>
                <div className="ListPageSearchFilter">
                    <form onSubmit={handleSearch} className="ListPageSearchForm">
                        <input type="text" className="ListPageSearch" placeholder="Search a player"/>
                        <button type="submit" className="ListPageSearchSubmit" name="" id="">
                            <BsSearch alt="SearchIcon" className="ListPageSearchIcon" />
                        </button>
                    </form>
                    <hr className="ListPageSearchHr"/>
                    <select onChange={handleSelect} className="ListPageFilterSelect">
                        <option value="all">All</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Gold">Gold</option>
                        <option value="Silver">Silver</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Copper">Copper</option>
                    </select>
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
                            isEven(index) === 0 
                            ?
                            <div className='ListCustomerEven'>
                                <div className='ListCustomerFirst'>
                                    <div className='ListCustomerRank'>
                                        <span>{rankOf(player)}</span>
                                    </div>
                                    <div className='ListCustomerAvatar'>
                                        <img className='ListCustomerAvatar' src={'./images/avatar'+player.avatar+'.png'}/>
                                    </div>
                                </div>
                                <div className='ListCustomerSecond'>
                                    <div className='ListCustomerNameDiv'>
                                        <a href={`/profile/${player._id}`} className='ListCustomerNickname'>
                                            {player.nickname}
                                        </a>
                                    </div>
                                    <div className='ListCustomerData'>
                                        <div className='ListCustomerStatusDiv'>
                                            <span className={`ListCustomerStatus${player.status}`}>
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
                                        <span>{rankOf(player)}</span>
                                    </div>
                                    <div className='ListCustomerAvatar'>
                                        <img className='ListCustomerAvatar' src={`./images/avatar${player.avatar}.png`}/>
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
                                            <span className={`ListCustomerStatus${player.status}`}>
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