import { Container, Filters, ProductsGroupList, Stories, Title, TopBar } from "@/shared/components/shared";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/shared/lib/find-pizzas";

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {

  const categories = await findPizzas(searchParams)

  return (
    <>
      <Container className='mt-10'>
        <Title text='All pizzas' size='lg' className='font-extrabold' />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      <Stories />

      <Container className='pb-14 mt-10'>
        <div className='flex gap-[60px]'>

          {/* Filter */}
          <div className=' w-[250px]'>
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Product list */}
          <div className='flex-1'>
            <div className="flex flex-col gap-16">
              {categories.map((category) => (
                category.products.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    variations={category.products}
                  />
                )
              ))}

            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
