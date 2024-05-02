import DataTable from 'react-data-table-component';

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
	},
	{
		name: 'Year',
		selector: row => row.year,
	},
  {
		name: 'Point',
		selector: row => row.point,
	}, 
  {
		name: 'Age',
		selector: row => row.age,
	},
];

const data = [
  {
		id: 1,
		title: 'Beetlejuice',
		year: '1988',
    point: '10',
    age: 36,
	},
	{
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
  {
		id: 2,
		title: 'Ghostbusters',
		year: '1984',
    point: '9',
    age: 40,
	},
]

function App() {
	return (
		<DataTable
			columns={columns}
			data={data}
		/>
	);
}

export default App
