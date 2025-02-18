# Use Cypress official image with dependencies included
FROM cypress/included:latest

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project into the container
COPY . .

# Set environment variables (Optional)
ENV CYPRESS_baseUrl="https://uat.mloflo.com/"

# Run Cypress tests
CMD ["npx", "cypress", "run"]
