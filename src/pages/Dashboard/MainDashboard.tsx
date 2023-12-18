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
      <TagsInput />
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartFour />
        <div className="xl:col-span-3">
          <SideFilters />
        </div>
        <div className="col-span-9">
          <div className="col-span-12 xl:col-span-12">
            <TableThree />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
