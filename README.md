# Alexcan ReactPro Library

Package from Fernando Herrera React Pro Course Section

### Alex Cantón García

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "fernandoherrera-reactpro-alexcan"
```

```
    <ProductCard
        key={product.id}
        product={product}
        initialValues={{
            count: 6,
            maxCount: 10,
        }}
    >
        {
            ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </>
            )
        }
    </ProductCard>
```