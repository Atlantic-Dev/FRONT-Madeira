import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllAvatars, getAllCustomers, searchCustomers } from "../../redux/actions"
import './List.css'
import {BsSearch} from 'react-icons/bs'
import Loading from '../loading/Loading'

const List = () => {    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getAllCustomers())
        dispatch(getAllAvatars())
    },[])

    //Customers complete list
    const allCustomers = useSelector((state) => state.customers)
    const backUpList = useSelector((state) => state.backup)
    
    //Avatar list
    const allAvatars = useSelector((state) => state.avatars)

    //Pagination
    const customersPerPage = 100
    const [currentPage, setCurrentPage] = useState(1)

    //Slice values
    const indexOfLast = currentPage * customersPerPage
    const indexOfFirst = indexOfLast - customersPerPage 

    //Status filter
    const [filter, setFilter] = useState('all')

    function handleSelect(e){
        setFilter(e.target.value)
        setCurrentPage(1)
    }

    //Rank sorting asc & des
    const [sort, setSort] = useState("asc")

    const handleAsc = (e) => {
        e.preventDefault()
        setSort("asc")
        setCurrentPage(1)
        sortAsc ()
    }
    const handleDes = (e) => {
        e.preventDefault()
        setSort("des")
        setCurrentPage(1)
        sortDes()
    }

    function sortAsc (){
        allCustomers.sort((pa, pb) => {
            if (pa.totalPoints > pb.totalPoints) {
              return -1;
            }
            if (pa.totalPoints < pb.totalPoints) {
              return 1;
            }
          })
    }

    function sortDes(){
        allCustomers.sort((pa, pb) => {
            if (pa.totalPoints > pb.totalPoints) {
              return 1;
            }
            if (pa.totalPoints < pb.totalPoints) {
              return -1;
            }
          })
    }

    //Shown page

    let filtredList = allCustomers
    if (filter !== 'all') {
        filtredList = allCustomers.filter((p) => p.status === filter) 
    }

    const slicedList = filtredList?.slice(indexOfFirst, indexOfLast)

    //Pages amount
    let pageLimit = Math.ceil(filtredList?.length  / customersPerPage)
    let pageNumbers = []
    if (pageLimit < 8){
        for (let i = 0; i < pageLimit; i++){
            pageNumbers.push(i+1)
        }
    }else if (currentPage < 5) {
        for (let i = 0; i < pageLimit && i < 7; i++){
        pageNumbers.push(i+1)
        }
    } else if (currentPage > (pageLimit - 5) && pageLimit > 6){
        pageNumbers = [pageLimit-6, pageLimit-5, pageLimit-4, pageLimit-3, pageLimit-2, pageLimit-1, pageLimit]
    } else {
    for (let i = currentPage-3; i <= currentPage+3; i++) {
        pageNumbers.push(i)
    }}

    //Page change
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

    //Buttons render
    const pagination = pageNumbers.map((p) => {
        return (             
            <button className={currentPage === p ? "ListPageButtonActive" : "ListPageButton"} key={p} id={p} onClick={handlePage}> {p} </button>             
        )}
    )

    //Ranking number
    function rankOf (customer) {
        return backUpList?.findIndex(cus => cus._id === customer._id)+1
    }

    //Even or not to define div`s classname (different background color)
    function isEven(n) {
        return n % 2
    }

    //Connecting search with action and reducer
    function handleSearch(e){
        e.preventDefault()
        let inputValue = document.getElementsByClassName("ListPageSearch")[0].value
        dispatch(searchCustomers(inputValue))
        setFilter("all")
        setCurrentPage(1)
    }

    //Visible loading
    const [loading, setLoading] = useState(true)
    useState(() => {
        setTimeout(() => setLoading(false), 3500)
    })
    
    return ( 
        <>
        {
            loading === true ?
            <div className='LoadingContainer'>
                <Loading/>
            </div>
            : null
            }
            <div className={loading === true ? "ListContainerHidden" :"ListContainer"}>
                <div className="List">
                    <div className="ListPageButtons">
                        <button className={currentPage > 4 && pageLimit > 7 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPageStart}>1</button>
                        <button className={currentPage > 5 && pageLimit > 7 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPagePrevFive}>{currentPage-5 < 1 ? 1 : currentPage-5}</button>
                        <div className="ListPageButtonsNumbers">
                            {pagination}
                        </div>
                        <button className={currentPage < pageLimit-4 && pageLimit > 7 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPageNextFive}>{currentPage > pageLimit-5 ? pageLimit : currentPage+5}</button>
                        <button className={currentPage < pageLimit-3 && pageLimit > 7 ? "ListPageButton" : "ListPageButtonDisabled"} onClick={setPageEnd}>{isNaN(pageLimit) ? 10 : pageLimit}</button>
                    </div>
                    <div className="ListPageSearchFilter">
                        <form onSubmit={handleSearch} className="ListPageSearchForm">
                            <input data-testid="ListPageSearch" type="text" className="ListPageSearch" placeholder="Search a player"/>
                            <button data-testid="ListPageSearchSubmit" type="submit" className="ListPageSearchSubmit" name="" id="">
                                <BsSearch alt="SearchIcon" className="ListPageSearchIcon" />
                            </button>
                        </form>
                        <hr className="ListPageSearchHr"/>
                        <select onChange={handleSelect} className="ListPageFilterSelect">
                            <option value="all">All status</option>
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
                                    <a onClick={handleAsc} className={sort === "asc" ? "ListRankingSortButtonSelected" : "ListRankingSortButton"}>▲</a>
                                    Rank
                                    <a onClick={handleDes} className={sort === "des" ? "ListRankingSortButtonSelected" : "ListRankingSortButton"}>▼</a>
                                </span>
                                <span className="ListRankingTitleText">
                                    Avatar
                                </span>
                            </div>
                            <div className="ListRankingTitleSecond">
                                <span className="ListRankingTitleText">
                                    Player
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
                                            <img className='ListCustomerAvatar' src={allAvatars[player.avatar - 1]?.imageUrl}/>
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
                                            <img className='ListCustomerAvatar' src={allAvatars[player.avatar - 1]?.imageUrl}/>
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
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List
