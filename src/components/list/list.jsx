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
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(completeList?.length / customersPerPage); i++) {
        pageNumbers.push(i)
    }

    //Pagina mostrada
    const slicedList = completeList?.slice(indexOfFirst, indexOfLast)

    //Cambio de pagina
    const handlePage = (e) =>{
        e.preventDefault()
        setCurrentPage(parseInt(e.target.id));
    }
    const prevPage = (e) => {
        e.preventDefault()
        if(currentPage > 1) {
            setCurrentPage(currentPage-1)}
        }
    const nextPage = (e) => {
        e.preventDefault()
        if (currentPage !== pageNumbers?.length) setCurrentPage(currentPage+1)
    }
    
    const pagination =  pageNumbers.map((p) => {
        return (             
            <button className={currentPage === p ? "pagNactive" : "pagN"} key={p} id={p} onClick={handlePage}> {p} </button>             
        )}
    )

    
    function isEven(n) {
        return n % 2
    }
    const consolelog = () => {console.log(completeList)}

    function handleConsole(e){
        e.preventDefault()
        console.log(slicedList)
    }

    return(
        <div className="ListContainer">
            <div className="List">
                <div className="ListPageButtons">
                    {pagination}
                </div>
                <button onClick={(e) => handleConsole(e)}>console</button>
                <button onClick={consolelog}>a</button>
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