import '../style.css'

export const BaseForm = () => {
    return (

        <table className='equipment_table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Наименование</th>
                    <th>Количество</th>
                    <th>Доступно на складе</th>
                    <th>В работе</th>
                    <th>В аренде</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Clay Paky B-Eye K10</td>
                    <td>24</td>
                    <td>20</td>
                    <td>4</td>
                    <td></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>2</td>
                    <td>Robe Robin Pointe</td>
                    <td>24</td>
                    <td>22</td>
                    <td>3</td>
                    <td></td>
                </tr>
            </tbody>
                <tbody>
                <tr>
                    <td>3</td>
                    <td>Robe Patt</td>
                    <td>4</td>
                    <td>4</td>
                    <td>0</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}