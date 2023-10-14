const express =require("express")
const router =express.Router()
const {addAccountant,getAccountant,getAccountantDetails,addTool,deleteTool} = require('../controller/accountantController')
// const {
//     verifyToken,
//   } = require("./verifyToken");
router.get('/', getAccountant)
// router.delete('/delete/:id',verifyToken, deleteTool)
router.post('/', addAccountant)
router.get('/:id', getAccountantDetails)
// router.get('/featured', getFeaturedTool)
// router.get('/:id', getToolDetail)
// router.get('/blog/me',verifyToken, getUserPost)
// router.post('/', setTool)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;