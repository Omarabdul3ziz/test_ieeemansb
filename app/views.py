from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, "base.html")


def baseII(request):
    return render(request, "baseII.html")


def greet(request):
    return render(request, "hello.html")

