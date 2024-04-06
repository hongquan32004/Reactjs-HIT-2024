import { useEffect, useState } from 'react';
import '../../scss/index.scss'
import axios from "axios";
import './Image.scss'
const Image = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const api = `https://picsum.photos/v2/list?page=${page}&limit=8`;
        const featchData = async () => {
            const response = await axios.get(api);
            if (page > 1) {
                setData(img => [...img, ...response.data])
            }
            else {
                setData([...response.data]);
            }
        }
        featchData();
        // fetch(api)
        //     .then(response => response.json())
        //     .then(json => setData(json))
    }, [page]);

    const loadMore = () => {
        setPage(page + 1);
    };
    return (
        <div className='content'>
            <div className='image'>
                {data.map((item, index) => (
                    <div className='list-image' key={index}>
                        <img src={item.download_url} alt="" />
                    </div>
                ))}
            </div>
            <div className='button'><button onClick={loadMore}>More</button></div>

        </div>
    )
}
export default Image;