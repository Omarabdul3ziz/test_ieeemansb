from django.shortcuts import render
from .models import Faq

# Create your views here.
def base(request):
    return render(request, "base.html")


def faq(request):
    q_a = {}
    data = Faq.objects.all()
    for item in data:
        q_a[item.question] = item.answer
    return render(request, "faqs.html", q_a)
