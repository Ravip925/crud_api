const router = require("express").Router();
const blogsController = require("../controllers/blogs-controller");

router.get("/", blogsController.getAllBlogs);
router.post("/", blogsController.addBlog);
router.get("/:id", blogsController.getById);
router.put("/:id", blogsController.updateBlog);
router.delete("/:id", blogsController.deleteBlog);

module.exports = router;
