const StatsBar = ({ stats, statsText}) => {
    if (stats !== 0) { // если статистики нет, не рендерятся и элементы
        return (
            <tr>
                <td>{statsText}</td>               
                <td>{stats}</td>
            </tr>
        )
    } else {
        return null
    }
}

export default StatsBar