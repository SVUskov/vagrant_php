Vagrant.configure("2") do |config|
    config.vm.box = "hashicorp/precise32"
    config.vm.provision :shell, path: "bootstrap.sh"
    config.vm.network :forwarded_port, guest: 80, host: 8080
end