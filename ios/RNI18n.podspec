
Pod::Spec.new do |s|
  s.name         = "RNI18n"
  s.version      = "1.0.0"
  s.summary      = "RNI18n"
  s.description  = <<-DESC
                  RNI18n
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "lijy91@foxmail.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/blankapp/plugin-i18n.git", :tag => "master" }
  s.source_files  = "RNI18n/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

