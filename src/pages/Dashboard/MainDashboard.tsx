import { Link } from 'react-router-dom';
import ChartFour from '../../components/ChartFour.tsx';
import SideFilters from '../../components/SideFilters.tsx';
import TableThree from '../../components/TableThree.tsx';
import TagsInput from '../../components/tags-input.tsx';
import IconClear from '../../images/icon/icon-clear.svg';
import IconSave from '../../images/icon/icon-save.svg';

const MainDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <TagsInput />
        <div className="col-span-4 items-center flex justify-between">
          
        <Link
              to="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-meta-3 py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span>
              </span>
              Search
            </Link>

            <Link
              to="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-black py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span>
               <img src={IconSave} />
              </span>
              Save
            </Link>

            <Link
              to="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary py-2 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span>
                <img src={IconClear}></img>
              </span>
              clear
            </Link>
        </div>
        <ChartFour />
        <div className="xl:col-span-3">
          <SideFilters />
        </div>
        <div className='col-span-9'>
          <div className="col-span-12 xl:col-span-12">
            <TableThree />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
