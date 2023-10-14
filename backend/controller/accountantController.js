const CharteredAccountant = require("../model/accountantModel");

// const charteredAccountantData = {
//     name: "Michael Jackson",
//     image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?fit=crop&w=800&q=80",
//     intro: "Expertise in accounting and finance, specializing in financial statements and auditing.",
//     rating: 4.8,
//     reviewCount: 89,
//     taskComplexity: "Basic to complex tasks",
//     price: "€4,370",
//     deliveryTime: "Delivers within 2 days",
//     testimonial: {
//       text: "Exceptional service in managing personal finances and deep understanding of financial markets.",
//       author: "John Doe",
//     },
//     about: {
//       from: "INDIA",
//       partnerSince: 2011,
//       averageResponseTime: "30 minutes",
//       description: "Professional Chartered Accountant offering diverse accounting and financial services.",
//       services: ["Financial accounting", "Bookkeeping", "Balance Sheets"],
//       benefits: ["One-time delivery", "24/7 support"],
//     },
//   };
const addAccountant =async(req, res) => {
    const newPost = new CharteredAccountant(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(401).json(err);
      console.log(err)
    }
  };




  const getAccountant = async (req,res) => {
    const tools =await CharteredAccountant.find()
    return res.status(200).json(tools)
}

// const getFeaturedTool = async (req,res) => {
//     try {
//         const featuredProducts = await Tool.find({ featured: true });
//        return res.status(200).json(featuredProducts);
//       } catch (error) {
//        return res.status(500).json({ error: 'Error fetching featured products' });
//       }
// }


const getAccountantDetails = async (req,res) => {
   const tootId =req.params.id.trim();
 try{
    CharteredAccountant.findById(tootId).then((tool) =>{
        return res.send(tool)
        
    })
 } catch(err) {
  return  res.status(403).json(err);
 }
console.log(tootId)
}


//   const deleteTool = async (req,res) => {
//     console.log(req.params.id)
   
//     const toolId = req.params.id;

//     try {
//       // Find the tool by ID and delete it
//       const deletedTool = await Tool.findByIdAndDelete(toolId);
  
//       if (!deletedTool) {
//         return res.status(404).json({ message: 'Tool not found' });
//       }
  
//       return res.status(204).send(); // No content response for successful deletion
//     } catch (error) {
//       console.error('Error deleting tool:', error);
//       return res.status(500).json({ error: 'Internal server error' });
//     }

// }





//   const addTool = async (req,res) => {
//     try {
//       const { name, price, Available, img, description } = req.body;
  
//       const newProduct = new Tool({
//         name,
//         price,
//         Available,
//         img,
//         description,
//         featured: false
//       });
  
//       const savedProduct = await newProduct.save();
//      return res.status(201).json(savedProduct);
//     } catch (error) {
//       console.error('Error creating product:', error);
//       return res.status(500).json({ error: 'Internal server error' });
//     }
// }

  module.exports ={
    addAccountant,
    getAccountant,
    getAccountantDetails
    // getPost,
    // getPostDetail,
    // getUserPost
  }