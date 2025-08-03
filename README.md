VagrantProject
Vagrant Multi-VM Setup for Web Application This Vagrantfile sets up a multi-VM environment for a web application with different components such as a database server, memcached server, RabbitMQ server, application server (Tomcat), and a web server (Nginx). Each VM is provisioned with the necessary software using shell scripts

image

What tools will we use in the project?
Prerequisite
Oracle VM Virtualbox
Vagrant
Vagrant plugins
PROVISIONING
Services

Nginx => Web Service

Tomcat => Application Server

RabbitMQ => Broker/Queuing Agent

Memcache => DB Caching

ElasticSearch => Indexing/Search service

MySQL => SQL Database

image

Project Steps
1:Create shell script (Backend vms )
Create a ShellScript file for Database we will call mariadb.sh We will write the following in the file

image

image

image

#2 Create a ShellScript file for Memcached we will call memcashed.sh We will write the following in the file

image

#3 Create a ShellScript file for RabbitMQ we will call rabbitmq.sh We will write the following in the file

image

#4 Create a ShellScript file for APP in clude ( tomcat , nginx )

1: TOMCAT
image

image

image

image

2: NGINX
image

After writing the scripts
we will write a vagrantfile, which should be like this, and we will put in it all the VM that we will create, and we will also make a private network and connect the VM to each other and introduce them

image

image

image

After all these steps, type inside the cmd in its own path
And in the end this is the picture of the project

image

The problems I faced and then solved them
1: If you use Vagrant on VM, this problem will appear
image

The solution is to use vagrant on physical machine and not VM
What we learn from vagrant ?
Improve your technical skills: Working with Vagrant will enhance your skills in managing virtual environments and automation. You will learn how to set up complex development environments, which can be invaluable in your field.
Save time and effort: Instead of spending hours setting up new development environments or fixing issues caused by differences between environments, you can save time by using Vagrant to quickly and easily set up a ready-made, consistent environment.
Reduce errors: Vagrant helps reduce errors caused by differences in environments, making you more efficient and reducing the number of problems you may encounter while developing or testing software.
Develop isolated environments for testing: You can use Vagrant to create isolated environments for testing, allowing you to experiment with new settings or software without affecting your platform. This is useful if you want to try something new without compromising your current environment.
Ease of sharing the environment with others: If you work in a team, you can share a Vagrantfile with your colleagues, making it easier for them to set up an identical development environment to avoid compatibility issues.
Increased Productivity: With Vagrant, you can easily create complex environments with the click of a button, increasing your productivity and allowing you to focus on software development instead of spending time setting up the environment.
Explore New Technologies: Vagrant can be your gateway to learning new technologies such as configuration management tools (Ansible, Chef, Puppet) or different operating systems. If you want to expand your knowledge and expertise, Vagrant can help you do that.
Improved Personal Development Experience: Overall, Vagrant makes the development process smoother and more efficient. You’ll find yourself less distracted by environmental issues and more focused on solving actual software problems.
Easily Work Remotely: If you work remotely or on multiple devices, you can easily move your environment between different devices using Vagrant, allowing you to continue working from anywhere without worrying about setting up the environment. In short, using Vagrant can make your daily work more efficient, reduce errors, and increase your productivity. It also provides you with an opportunity to learn new technologies and improve your environment management skills.
thx4w-8 (1)
