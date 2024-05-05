import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/getAllUsers', async (req, res) => {
    try {
        const users = await prisma.users.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the users.' });
    }
})

app.post('/api/deleteUser', async (req, res) => {
    const user = req.body
    try {
        await prisma.$executeRawUnsafe(`
            EXEC DeleteUser 
                @UserID = ${user.UserID}
        `);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
})

app.post('/api/insertUser', async (req, res) => {
    const user = req.body;
    try {
        await prisma.$executeRawUnsafe(`
            EXEC InsertUser 
                @FullName = N'${user.FullName}', 
                @Email = '${user.Email}', 
                @PhoneNumber = '${user.PhoneNumber}', 
                @Gender = '${user.Gender}', 
                @YearOfBirth = ${user.YearOfBirth}, 
                @Street = N'${user.Street}', 
                @City = N'${user.City}', 
                @Province = N'${user.Province}'
        `);
        res.status(200).json({ message: 'User inserted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while inserting the user.' });
    }
})

app.post('/api/updateUser', async (req, res) => {
    const user = req.body;
    try {
        await prisma.$executeRawUnsafe(`
            EXEC UpdateUser 
                @UserID = ${user.UserID},
                @FullName = N'${user.FullName}', 
                @Email = '${user.Email}', 
                @PhoneNumber = '${user.PhoneNumber}', 
                @Gender = '${user.Gender}', 
                @YearOfBirth = ${user.YearOfBirth}, 
                @Street = N'${user.Street}', 
                @City = N'${user.City}', 
                @Province = N'${user.Province}'
        `);
        res.status(200).json({ message: 'User inserted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while inserting the user.' });
    }
})

const server = app.listen(3001, () =>
    console.log(
        '🚀 Server ready at: http://localhost:3001',
    ),
)
