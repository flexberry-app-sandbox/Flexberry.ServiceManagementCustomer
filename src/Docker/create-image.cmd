docker build --no-cache -f SQL\Dockerfile.PostgreSql -t service_management_customer/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t service_management_customer/app ../..
