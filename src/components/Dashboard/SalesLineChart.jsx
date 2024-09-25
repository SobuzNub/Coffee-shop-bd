import { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import LoadingSpinner from '../../page/shared/LoadingSpinner'

// const data = [
//   ['Day', 'Sales'],
//   ['9', 1000],
//   ['10', 1170],
//   ['11', 660],
//   ['12', 1030],
// ]

const options = {
  title: 'Sales Over Time',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: [{ color: '#F43F5E' }],
}
const SalesLineChart = ({data}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) return <LoadingSpinner></LoadingSpinner>

  return (
    <>
     {loading ? <LoadingSpinner smallHeight ></LoadingSpinner> : data?.length > 1 ? <Chart chartType='LineChart' width='100%' data={data} options={options} /> : <><LoadingSpinner smallHeight ></LoadingSpinner> <p className='text-center text-red-600 font-semibold'>Data is not available for this section</p></>}
    </>
  )
}

export default SalesLineChart


