import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Box from './MainGoodsCompoent/Box';
import Category from './MainGoodsCompoent/Category';
import RegisterBtn from './MainGoodsCompoent/RegisterBtn';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { categoryLoad, AllLoad } from '../fetch/articleLoad';
import BoxDataObj from '../Types/BoxDataObj';
import { Button, Pagination } from '@mui/material';

export default function BoxList() {
  const data = useLoaderData() as BoxDataObj[];
  const navigate = useNavigate();

  const [selected, setSelected] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<BoxDataObj[]>([]);
  const [currentItems, setCurrentItems] = useState<BoxDataObj[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9; //몇개씩 보여줄지 정함.

  useEffect(() => {
    const fetchFiltered = async () => {
        const params = new URLSearchParams();
        selected.forEach((cat) => params.append('category', cat));
        const result = await categoryLoad(params.toString());
        setFilteredData(result);
        setCurrentPage(1); // 첫 페이지로 이동
    };
    fetchFiltered();
    setFilteredData(data);
    
  }, [selected, data]);
  console.log(window.screen)
  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage; //첫번째 아이템이 몇번째인지,
    const endOffset = offset + itemsPerPage; // 마지막 아이템이 몇번째인지.
    setCurrentItems(filteredData.slice(offset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
  }, [currentPage, filteredData]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <Category selected={selected} setSelected={setSelected} />
        <Button 
        variant="contained"
        className="w-[10rem] h-[3.5rem]"
        onClick={() => navigate('regist')}
        >
            <p className="text-xl">등록하기</p>
        </Button>

      <div
        className='w-[80%] h-full grid grid-cols-3 place-items-center text-center overflow-hidden'
      >
        {currentItems.map((dataObj) => (
          <Box
            key={dataObj.id}
            imgs={dataObj.imageList}
            title={dataObj.title}
            content={dataObj.content}
            id={dataObj.id}
          />
        ))}
      </div>
      <div className="mt-6">
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
}

export const Loader = async () => {
  return await AllLoad();
};
