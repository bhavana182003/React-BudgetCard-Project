// import React from 'react';
// import { Button,Stack} from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import BudgetCard from './components/BudgetCard.js';

// function App()
// {  
//     return(
//         <Container className="my-4">
//             <Stack direction="horizontal" gap="2" className="mb-4">
//                 <h1 className="me-auto">Budgets</h1>
//                 <Button variant="primary">
//                     Add Budget
//                 </Button>
//                 <Button variant="outline-primary">
//                     Add Expense
//                 </Button>
//             </Stack>
//             <div
//                 style={{
//                     display : "grid",
//                     gridTemplateColumns :"repeat(auto-fill,minmax(300px,1fr))" ,
//                     gap:"1rem",
//                     alignItems:"flex-start"
                
//                 }}
//             >
//                 <BudgetCard name="Entertainment" amount ={350} max ={1000}> 
//                 </BudgetCard>
//                 <BudgetCard name="Food" amount ={100} max ={1000}></BudgetCard>
//                 <BudgetCard name ="Transport" amount ={150} max ={1000}></BudgetCard>
//                 <BudgetCard name ="Shopping" amount ={100} max ={1000}></BudgetCard>
//                 <BudgetCard name ="Rent" amount ={100} max ={1000}></BudgetCard>
//                 <BudgetCard name ="Total" amount={800} max={1000}></BudgetCard>
//             </div>
//         </Container> 
//     );    
// }
// export default App;
import React from 'react';
import { Button,Stack} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddExpenseModal from './components/AddExpenseModal.js';
import AddBudgetModal from './components/AddBudgetModal.js';
import BudgetCard from './components/BudgetCard.js';
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard.js';
import TotalBudgetCard from './components/TotalBudgetCard.js';
import { useState } from 'react';
import { UNCATEGORIZED_BUDGET_ID} from './Contexts/BudgetsContext.js';

function App()
{  
    return(
        <Container className="my-4">
            <Stack direction="horizontal" gap="2" className="mb-4">
                <h1 className="me-auto">Budgets</h1>
                <Button variant="primary">
                    Add Budget
                </Button>
                <Button variant="outline-primary">
                    Add Expense
                </Button>
            </Stack>
            <div
                style={{
                    display : "grid",
                    gridTemplateColumns :"repeat(auto-fill,minmax(300px,1fr))" ,
                    gap:"1rem",
                    alignItems:"flex-start"
                
                }}
            >
                <BudgetCard name="Entertainment" amount ={350} max ={1000}> 
                </BudgetCard>
                <BudgetCard name="Food" amount ={100} max ={1000}></BudgetCard>
                <BudgetCard name ="Transport" amount ={150} max ={1000}></BudgetCard>
                <BudgetCard name ="Shopping" amount ={100} max ={1000}></BudgetCard>
                <BudgetCard name ="Rent" amount ={100} max ={1000}></BudgetCard>
                <BudgetCard name ="Total" amount={800} max={1000}></BudgetCard>
            </div>
        </Container> 
    );    
}
export default App;
