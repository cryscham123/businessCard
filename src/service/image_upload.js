class ImageUploader {
    upload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "q9gmvc5z");
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dffhras2d/image/upload",
            {
                method: "POST",
                body: formData
            }
        );
        return await res.json();
        }
}

export default ImageUploader;