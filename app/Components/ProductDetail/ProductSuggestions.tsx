import Link from 'next/link';
import Button from '../UI/Button';
import styles from './ProductSuggestions.module.css';

interface OtherProduct {
  image: {
    desktop: string,
    mobile: string,
    tablet: string
  },
  name: string,
  slug: string
}

export default function ProductSuggestions({products} : {products: Array<OtherProduct>}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>You May Also Like</h3>
      <div className={styles.productContainer}>
        {products.map((product, index) => (
          <Link key={index} href={product.slug} className={styles.product}>
            <picture>
              <source srcSet={product.image.desktop} media="(min-width: 1200px)" />
              <source srcSet={product.image.tablet} media="(min-width: 700px)" />
              <img 
                src={product.image.mobile} 
                alt={product.name} 
                className={styles.productImage}
              />
            </picture>
            <h5 className={styles.productName}>{product.name}</h5>
            <Button>See Product</Button>
          </Link>
        ))}
      </div>
    </div>
  )
}