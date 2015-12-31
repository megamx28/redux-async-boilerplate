# List

This component will display a ol HTML list

## Props

| Props       | Type    | Description                		| Default | Required |
|-------------|---------|-----------------------------------|---------|----------|
| items       | array   | The display elements              | None 	  | Yes  	 |
| displayKey  | string  | The array key in items to display | None 	  | Yes 	 |

## Usage

```
const displayKey = 'name'
const items = [
	{id: '1', name: 'user1'},
	{id: '2', name: 'user2'},
	{id: '3', name: 'user3'},
	{id: '4', name: 'user4'},
	{id: '5', name: 'user5'}
]

<List items={items} displayKey={displayKey} />
