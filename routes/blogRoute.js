const router = require("express").Router();
const blogsController = require("../controllers/blogs-controller");
const verifyToken = require('./verifyToken');

router.get("/", blogsController.getAllBlogs);
router.post("/",verifyToken, blogsController.addBlog);
router.get("/:id",verifyToken, blogsController.getById);
router.put("/:id",verifyToken, blogsController.updateBlog);
router.delete("/:id",verifyToken, blogsController.deleteBlog);

module.exports = router;
