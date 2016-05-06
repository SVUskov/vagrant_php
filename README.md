# Vagrant  basic virtual machine for web development in php.

Installation.
------------
1. Install [virtualbox](https://www.virtualbox.org/wiki/Downloads);
2. Install [vagrantup](https://www.vagrantup.com/);
3. Remove folder .git;
4. Configure Vagrantfile and bootstrap.sh;
5. Run commands in terminal;
    ```
    vagrant up
    ```
6. Connect using  ssh to  virtual machine. Default 127.0.0.1:2222, username:vagrant, key:private_key.ssh ;

7. Run commands in terminal;
    ```
    cd /home/vagrant
    composer install
    bower install
    npm install
    ```
8. Open url default 127.0.0.1:8080;

What included.
-------------

* [apache](http://www.apache.org/)
* [php](https://secure.php.net/)
* [mysql](https://www.mysql.com/)
* [git](https://git-scm.com/)
* [composer](https://getcomposer.org/)
* [nodejs](https://nodejs.org/en/)
* [bower](http://bower.io/)
* [gulp](http://gulpjs.com/)