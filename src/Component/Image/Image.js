// import styles 
import styles from "./image.module.css";
//icons
import pen from '../../Files/images/pen.png';
import del from '../../Files/images/delete.png'; 



// to show all the images within an album
export default function Image(props){

    const {image,index,handleImageEdit,handleImageDelete,openLightbox}=props;

    return(
        <>
            {/* main container of Image */}
            <div className={styles.imageCard}>
                
                {/* showing image */}
                <div className={styles.imageBox}>
                    <img src={image.link} 
                        alt="image"  
                        onClick={() => openLightbox(index)}/>
                </div>

                {/* Image name with buttons to delete or edit image */}
                <div className={styles.imageInfo}>
                    {image.name}
                    {/* for edit */}
                    <button className={`${styles.imageBtn} ${styles.editBtn}`} 
                        onClick={()=>handleImageEdit(image)}>
                        <img className={styles.editicon} src={pen} alt="edit-icon" />  
                    </button>

                    {/* for delete */}
                    <button className={`${styles.imageBtn} ${styles.deleteBtn}`} 
                        onClick={()=>handleImageDelete(image)}>
                          <img className={styles.delicon} src={del} alt="delete-icon" />
                    </button>
                </div>
            </div>
        </>
    )
}