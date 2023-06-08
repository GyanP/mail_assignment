# **Backend Server Setup**

## Prerequisites 
* python >= 3.8
* pip3



1. Create a virtual environment. If you don't have virtualenv installed, you can download it with the command:
    ```
    pip install virtualenv
    
    ```
2. Create a virtual environment with the following command:
    ```
    virtualenv <virtual environment name>
    ```

3. Activate the virtual environment using the command:

    ```
    source <virtual environment name>/bin/activate
    ```
4. Change the directory to the backend folder:
    ```
    cd /backend
    ```
5. Install the project dependencies by running:
    ```
    pip install -r requirements.txt
    ```
6. Create a .env file in the backend directory using the command line:
    ```
    touch .env
    ```
7. Open the .env file and update it with the PostgreSQL database credentials as follows:
    ```
    POSTGRES_DB=< postgres database name >
    POSTGRES_USER=< postgres user name>
    POSTGRES_PASSWORD=< postgres password >
    POSTGRES_HOST=< host name for postgres >
    POSTGRES_PORT=< postgres port >
    ```
8. You can now run the backend server by executing the following command:
    ```
    python manage.py runserver
    ```
----

# **Frontend Server Setup**

## Prerequisites 
* node >= 14.21.3

## Install Dependencies
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
   
2. To install the required dependencies, run the following command:
   
   ```
   npm install
   ```


## Run Project
To start the project, use the following command:
```
npm start
```